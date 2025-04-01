import { ContactSubmission, InsertContactSubmission } from "@shared/schema";

// Modify the interface with any CRUD methods you might need
export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmissionCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentSubmissionId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.currentSubmissionId = 1;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentSubmissionId++;
    const timestamp = new Date();
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id,
      createdAt: timestamp
    };
    
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getContactSubmissionCount(): Promise<number> {
    return this.contactSubmissions.size;
  }
}

export const storage = new MemStorage();
