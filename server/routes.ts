import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Mock function to simulate sending an email notification
// In a production environment, this would use a proper email service like SendGrid, Mailgun, etc.
async function sendEmailNotification(formData: any, recipients: string[]) {
  console.log(`[EMAIL NOTIFICATION] Would send email to: ${recipients.join(', ')}`);
  console.log(`[EMAIL NOTIFICATION] Form data: ${JSON.stringify(formData, null, 2)}`);
  
  // Return success for now - in production, this would return the email service's response
  return {
    success: true,
    message: `Email notification would be sent to ${recipients.join(', ')}`
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Define email recipients
      const emailRecipients = [
        'info@lumewebstudios.com', 
        'yaseenlenceria@gmail.com', 
        'claude@claudekameni.com'
      ];
      
      // Send email notification
      try {
        const emailNotification = await sendEmailNotification(validatedData, emailRecipients);
        console.log(`Email notification status: ${emailNotification.success ? 'Success' : 'Failed'}`);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We don't want to fail the request if only email sending fails
        // But we log it for debugging
      }
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact form submission received",
        submissionId: contactSubmission.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Convert Zod error to a more readable format
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({
          success: false,
          message: "Server error processing your request"
        });
      }
    }
  });

  // Get site stats (for admin purposes)
  app.get("/api/stats", async (req, res) => {
    try {
      const contactCount = await storage.getContactSubmissionCount();
      
      res.status(200).json({
        success: true,
        stats: {
          contactSubmissions: contactCount
        }
      });
    } catch (error) {
      console.error("Error fetching site stats:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching site statistics"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
