export class ErrorModel {
    constructor(
        public error: { 
            title: string,
            traceId: string
        },
        public status: number, 
        public url: string,
        ) {}
}