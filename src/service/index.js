import Service from 'vue-service'

const apiUrl = 'http://some.stuff/api/';

export default someService extends Service {

  construct(){
    super(apiUrl)
  }

  getAll(){
    return this.get('someEndPoint');
  }

  getOne(id) {
    return this.get('someEndPoint/'+ id);
  }
}
