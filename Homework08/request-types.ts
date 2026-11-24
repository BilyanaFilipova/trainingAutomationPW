
// Step 1 - Basic Information

export type RequestDetails = {
    title: string;
    description: string;
    category: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    dateOfRequest: Date;
    isEmergency: boolean;
    severity?: number;
    isRecurring?: boolean;
    hasPermits?: boolean;
    issueType?: string;
    estimatedValue?: number;
    comments?: string;
    satisfactionRating?: number;
};

// Step 2 - Location Details

export type Location = {
    streetAddress: string;
    city: string;
    postalCode: string;
    latitude?: number;
    longitude?: number;
    locationText: string;
    landmark?: string;
    accessInstructions?: string;
};

// Step 3 - Contact Information

export type AffectedService =
    | 'Water Supply'
    | 'Electrical'
    | 'Gas'
    | 'Internet/Cable'
    | 'Garbage Collection';

export type ContactDetails = {
    contactMethod: 'EMAIL' | 'PHONE' | 'SMS' | 'MAIL';
    email?: string;
    phone: string;
    alternatePhone?: string;
    mailingStreetAddress?: string;
    mailingCity?: string;
    mailingPostalCode?: string;
    affectedServices?: AffectedService[];
    bestTimeToContact?: string;
    wantsUpdates?: boolean;
    preferredDate?: Date;
    preferredTime?: string;
    additionalContacts?: unknown[];
};

// Step 4 - Additional Details

export type Attachment = {
    fileName: string;
    fileType: string;
    fileSize: number;
};

// Complete New Request

export type NewRequest = {
    requestDetails: RequestDetails;
    location: Location;
    contactDetails: ContactDetails;
    attachments?: Attachment[];
    agreesToTerms: boolean;
};