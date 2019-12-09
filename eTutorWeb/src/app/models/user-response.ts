import {Gender} from '../enums/gender';

export interface UserResponse {
    name: string;
    lastName: string;
    personalId: string;
    isActive: boolean;
    isEmailValidated: boolean;
    isTemporaryPassword: boolean;
    gender: Gender;
    address: string;
    longitude: number;
    latitude: number;
    profileImageUrl: string;
    fullName: string;
}
