import { Auth } from "aws-amplify";
describe('test news_app', function () {
  it('test news-app.Login', function (done) {
    let result = news_app.Login();
    assert.equal(result, 1);
    done();
  })
})
