import { Injectable } from '@nestjs/common';

// App imports
import { AuthDto } from 'src/dtos/auth.dto';

@Injectable()
/**
 * Service responsible for handling authentication-related operations.
 */
export class AuthService {

  /**
   * Validates the data from authentication form
   * 
   * @returns {Promise<AuthModel>} A promise that resolves to an instance of AuthModel.
   */
  async validate(): Promise<AuthDto> {
    return new AuthDto();
  }

}
