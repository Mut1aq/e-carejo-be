import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = Admin & Document;

@Schema({
  validateBeforeSave: true,
})
export class Admin {
  @Prop({
    type: String,
    minlength: [5, 'Email must be more than 5 characters'],
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be more than 8 characters'],
    trim: true,
  })
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
