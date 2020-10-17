export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  getAccounts: jest.fn().mockResolvedValue({ data: {accounts: []} }),
  post: jest.fn().mockResolvedValue({ data: {token: '1234'} })
}