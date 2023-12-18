import { EntitySchema } from "typeorm"

export const User= new EntitySchema({
    name: "User",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        isActive: {
            type: Boolean
        }
    }
})