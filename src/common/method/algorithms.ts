import * as bcrypt from 'bcrypt';

export function compareString(item1: string, item2: string): boolean {
  return item1 === item2;
}

/**
 * Return hash password
 *
 */
export async function bcryptEncryptPassword(
  password: string,
  salt: number,
): Promise<string> {
  const genSalt = await bcrypt.genSalt(salt);
  return bcrypt.hash(password, genSalt);
}
