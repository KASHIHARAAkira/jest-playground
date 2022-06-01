import OperateMariadb from "../lib/operate_mariadb";

describe("Interface testing.", () => {
  it("Expected return value is true.", async () => {
    const operateMariadb = new OperateMariadb();
    await operateMariadb.getConnection();
    const result = await operateMariadb.checkCardName("king");
    expect(result).toBeTruthy();
    await operateMariadb.disconnection();
    operateMariadb.poolEnd();
  });

  it("Expected return value is false.", async () => {
    const operateMariadb = new OperateMariadb();
    await operateMariadb.getConnection();
    const result = await operateMariadb.checkCardName("jack");
    expect(result).toBeFalsy();
    await operateMariadb.disconnection();
    operateMariadb.poolEnd();
  });
});

describe("Error handling testing.", () => {
  it("con.query throws error", async () => {
    const operateMariadb = new OperateMariadb();
    await operateMariadb.getConnection();
    if (operateMariadb.connection) {
      jest
        .spyOn(operateMariadb.connection, "query")
        .mockImplementation(() => Promise.reject(new Error("Query Error.")));

      expect(operateMariadb.checkCardName("king")).rejects.toThrow(
        "Query Error."
      );
      await operateMariadb.disconnection();
      operateMariadb.poolEnd();
    }
  });

  it("this.connection is undefined.", () => {
    const operateMariadb = new OperateMariadb();

    expect(operateMariadb.checkCardName("king")).rejects.toThrow(
      "The database connection does not exist."
    );

    operateMariadb.poolEnd();
  });
});
