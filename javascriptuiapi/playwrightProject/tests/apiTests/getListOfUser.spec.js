import { expect, request, test } from "@playwright/test";
import data from '../testData/data.json';
import getListOfUser from './apiPom/getUitls/getUserList.json';
import createUserBodyPayload from './apiPom/postUtils/createUserPayload.json';

test.describe('api automation suite', () => {

    test('fatching list of user', async ({request}) => {
        const response = await request.get(data.serviceUrl)
        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(data.sucessfulStatusCode)
        expect(await response.json()).toEqual(expect.objectContaining(getListOfUser))
    })

    test('creating list of user', async ({request}) => {
        const response = await request.post(data.postUserList, {
            data:createUserBodyPayload
        })
        expect(response.status()).toBe(data.createdSucessfulStatusCode)
        //const jsonOutput = (await response.json());
        //console.log(jsonOutput);
    })

});
