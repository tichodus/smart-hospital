export class Condition {
    type: string;
    description: string;
    isUrgent: number;

    constructor(type: string, description: string, isUrgent) {
        this.type = type;
        this.description = description;
        this.isUrgent = isUrgent;
    }
}
