import {HTTP_STATUS} from "../../../src/lib/constants";

const PKG_SINGLE_UPLINK = '@test/pkg-uplink';

export default function (server, server2, server3) {

  describe('uplink scoped package test', () => {
    beforeAll(async () => {
      await server2.addPackage(PKG_SINGLE_UPLINK).status(HTTP_STATUS.CREATED);
    });

    test('should fetch scoped package from uplink', () => {
      return server.getPackage(PKG_SINGLE_UPLINK).status(HTTP_STATUS.OK)
    });
  });



}
