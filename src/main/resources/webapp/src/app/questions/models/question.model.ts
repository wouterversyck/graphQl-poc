import { User } from '../../users/models/user.model';

export class Question {
  question: string;
  id: number;
  user: User;
}
