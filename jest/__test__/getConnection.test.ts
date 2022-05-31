import OperateMariadb from "../lib/operate_mariadb";
const operateMariadb = new OperateMariadb();

afterAll(() => {
  operateMariadb.poolEnd();
});

describe("Interface testing.", () => {
  it("Expected running.", async () => {
    await operateMariadb.getConnection();
    expect(operateMariadb.connection).not.toBeUndefined();
  });
});

// describe("Error handling testing.", () => {
//   it("this.pool.getConnection throws error.", async () => {
//     jest
//       .spyOn(operateMariadb.pool, "getConnection")
//       .mockImplementation(async () => {
//         throw new Error("Connection failed.");
//       });

//     expect(operateMariadb.getConnection()).rejects.toThrow(
//       "Connection failed."
//     );
//   });
// });
