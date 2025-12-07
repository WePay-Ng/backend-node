import { prisma } from "../src/prisma/client";
import { captureFingerPrint } from "../src/modules/users/service";

jest.mock('ioredis');
jest.mock('bullmq');

jest.mock("../src/prisma/client", () => ({
  prisma: {
    user: {
      update: jest.fn(),
    },
  },
}));

describe("captureFingerPrint", () => {
  const mockUser = {
    id: "123",
    name: "John Doe",
    fingerPrint: "myfingerprint",
    address: {
      streetLine: "A Street",
      city: "Lagos",
      country: "NG",
    },
  };

  it("should update the user's fingerprint successfully", async () => {
    (prisma.user.update as jest.Mock).mockResolvedValue(mockUser);

    const result = await captureFingerPrint("123", {
      fingerPrint: "myfingerprint",
    });

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { id: "123" },
      data: { fingerPrint: "myfingerprint" },
      include: { address: true },
    });

    expect(result).toEqual(mockUser);
  });

  it("should throw an error if prisma fails", async () => {
    (prisma.user.update as jest.Mock).mockRejectedValue(
      new Error("It fails to update fingerprint")
    );

    await expect(
      captureFingerPrint("123", { fingerPrint: "abc" })
    ).rejects.toThrow("It fails to update fingerprint");
  });

  it("should throw if fingerprint is missing", async () => {
    await expect(
      captureFingerPrint("123", { fingerPrint: "" })
    ).rejects.toThrow();
  });
});
