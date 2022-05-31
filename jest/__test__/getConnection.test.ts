import OperateMariadb from "../lib/operate_mariadb";

// afterAll(() => {
//   if (operateMariadb.connection) {
//     operateMariadb.connection.end();
//   }
//   operateMariadb.poolEnd();
// });

// describe("Interface testing.", () => {
//   it("Expected running.", async () => {
//     await operateMariadb.getConnection();
//     expect(operateMariadb.connection).not.toBeUndefined();
//   });
// });

describe("Interface testing.", () => {
  it("Expected running.", async () => {
    const operateMariadb = new OperateMariadb();
    await operateMariadb.getConnection();
    expect(operateMariadb.connection).not.toBeUndefined();
    await operateMariadb.disconnection();
    operateMariadb.poolEnd();
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
