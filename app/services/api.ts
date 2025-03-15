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
export async function fetchData<T = unknown>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

//Especifics API calls
export async function getMembers() : Promise<Members[]> {
    const baseURL = "http://localhost:8081";
    return fetchData<Members[]>(`${baseURL}/members`)
}

//uknown structure
export async function getData<T>(): Promise<T> {
    return fetchData<T>("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
}