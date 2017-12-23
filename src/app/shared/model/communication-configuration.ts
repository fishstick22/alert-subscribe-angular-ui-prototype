export interface CommunicationConfiguration {
    id: number;
    name: string;
    description: string;
    chanEmailPriority: number;
    chanIvrPriority: number;
    chanSmsPriority: number;
    chanMailPriority: number;
    chanMobilePriority: number;
    chanDefault: 'No' | 'Email' | 'IVR' | 'SMS';
    required: boolean;
    mandatory: boolean;
    effective: string;
    expiration: string;
}
