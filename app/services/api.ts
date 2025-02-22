//Interfaces

//Interface for members
export interface Members {
    id: string;
    name: string;
    role: string;
    linkedinURL: string;
    avatar: string;
}

//Helper function to fetch data from a given endpoint
export async function fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

//Especifics API calls
export async function getMembers() : Promise<Members[]> {
    return fetchData<Members[]>("/api/members")
}