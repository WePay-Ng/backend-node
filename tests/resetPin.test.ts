import { resetPin } from "../src/modules/auth/auth.service";
import { prisma } from "../src/prisma/client";

jest.mock("../src/prisma/client", () => ({
    prisma: {
        user: { update: jest.fn() },
        verificationIntent: { deleteMany: jest.fn() },
        auditLog: { create: jest.fn() },
    },
}));

describe("resetPin()", () => {
    const mockUser = { id: "user123", pin: null };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should update user pin, revoke verification intents, create audit log, and return user", async () => {
        (prisma.user.update as jest.Mock).mockResolvedValue({
            ...mockUser,
            pin: "9999",
        });

        (prisma.verificationIntent.deleteMany as jest.Mock).mockResolvedValue({});
        (prisma.auditLog.create as jest.Mock).mockResolvedValue({});

        const result = await resetPin(mockUser as any, { pin: "9999" });

        // Check UPDATE call
        expect(prisma.user.update).toHaveBeenCalledWith({
            where: { id: "user123" },
            data: { pin: "9999" },
        });

        // Check DELETE verification intents
        expect(prisma.verificationIntent.deleteMany).toHaveBeenCalledWith({
            where: { userId: "user123" },
        });

        // Check AUDIT LOG
        expect(prisma.auditLog.create).toHaveBeenCalledWith({
            data: { userId: "user123", action: "RESET_PIN" },
        });

        // Function should return the same user object
        expect(result).toEqual(mockUser);
    });
});
