import { loginWithFinger } from "../src/modules/auth/auth.service";
import { prisma } from "../src/prisma/client";


jest.mock("../src/prisma/client", () => ({
    prisma: {
        user: {
            findFirst: jest.fn(),
        },
        auditLog: {
            create: jest.fn(),
        },
    },
}));

describe("loginWithFinger", () => {
    const mockUser = {
        id: "123",
        name: "John Doe",
        fingerPrint: "abc123",
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should login successfully with valid fingerprint", async () => {
        // Mock user found
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);

        const result = await loginWithFinger({ fingerPrint: "abc123" });

        expect(prisma.user.findFirst).toHaveBeenCalledWith({
            where: { fingerPrint: "abc123" },
        });

        expect(prisma.auditLog.create).toHaveBeenCalledWith({
            data: { userId: "123", action: "LOGIN" },
        });

        expect(result).toEqual(mockUser);
    });

    it("should throw error if fingerprint is missing", async () => {
        await expect(
            loginWithFinger({ fingerPrint: "" })
        ).rejects.toThrow("Finger is required or invalid finger data");

        await expect(
            loginWithFinger({ fingerPrint: "" })
        ).rejects.toThrow("Finger is required or invalid finger data");

        // prisma should not be called
        expect(prisma.user.findFirst).not.toHaveBeenCalled();
    });

    it("should throw error if fingerprint is invalid", async () => {
        // No user found
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);

        await expect(
            loginWithFinger({ fingerPrint: "wrong" })
        ).rejects.toThrow("Invalid fingerprint");

        await expect(
            loginWithFinger({ fingerPrint: "wrong" })
        ).rejects.toThrow("Invalid fingerprint");

        expect(prisma.auditLog.create).not.toHaveBeenCalled();
    });
});
