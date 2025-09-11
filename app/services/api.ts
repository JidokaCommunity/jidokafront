export interface Member {
    id: string;
    name: string;
    role: string;
    linkedinURL: string;
    avatar: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

export async function fetchData<T>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(endpoint);
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

export const getData = <T>(url: string): Promise<T> => 
    fetchData<T>(url);