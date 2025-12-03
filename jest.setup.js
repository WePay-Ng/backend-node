jest.mock('nanoid', () => ({
    nanoid: () => "mocked-id"
}));