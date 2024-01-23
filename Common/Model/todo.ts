export interface Todo {
	id?: string;
	owner: any;
	orgId: string;
	description: string;
	isSubscribed: boolean;
	name: string;
	checklists: any;
	members: any;
};

export interface TodoResource {
	id?: string;
	todoId: string;
	owner: any;
	resource: any;
	orgId: string;
	type: number;
	createdAt?: Date;
}
