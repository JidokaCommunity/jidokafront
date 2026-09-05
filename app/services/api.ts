/**
 * Represents a member of the Jidoka community.
 */
export interface Member {
    id: string;
    name: string;
    role: string;
    linkedinURL: string;
    avatar: string;
    specialty?: string;
    githubUrl?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

/**
 * Utility function to fetch data from a given API endpoint.
 * 
 * @param endpoint - The URL to fetch data from.
 * @returns A promise that resolves to the parsed JSON response.
 */
export async function fetchData<T>(endpoint: string): Promise<T> {
    try {
        const apiKey = process.env.API_KEY || '';
        const response = await fetch(endpoint, {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
}

export const getMembers = (): Promise<Member[]> =>
    fetchData<Member[]>(`${API_BASE_URL}/members`);

export const getMemberById = (id: string): Promise<Member> =>
    fetchData<Member>(`${API_BASE_URL}/members/${id}`);

export const getData = <T>(url: string): Promise<T> =>
    fetchData<T>(url);