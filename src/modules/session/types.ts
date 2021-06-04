export interface SessionState {
  accessToken: string | null;
  status: 'unknown' | 'loggedIn' | 'loggedOut';
}

export interface CreateSessionPayload {
  accessToken: string;
}
