import OperateMariadb from "../lib/operate_mariadb";

describe("Interface testing.", () => {
  it("Expected running.", async () => {
    const operateMariadb = new OperateMariadb();
    await operateMariadb.getConnection();
    operateMariadb.poolEnd();
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
