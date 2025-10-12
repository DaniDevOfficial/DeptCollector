
export interface User {
    id: string;
    name: string;
}

export async function getUsers() {
    //TODO: add call to backend to get users

    await new Promise(resolve => setTimeout(resolve, 5000));

    const data: User[] = [
        {
            id: 'asdfasdf',
            name: 'asdfasdf',
        }
    ]

    return data;
}