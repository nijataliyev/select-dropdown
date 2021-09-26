import { Options, Vue } from "vue-class-component";
import axios from 'axios';

@Options({
  name: 'multi-my-select-component'
})

export default class MultiMySelectComponent extends Vue {

  public multiUsers: any = [];
  public users: any = [];
  public searchItem: any = "";
  public selectedItem: any = null;
  public isVisible: any = false;


  public mounted(){
    console.log('dede');
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.users = res.data;
      })
  }

  get filteredUser() {
    const searchElement = this.searchItem.toLowerCase();
    if(this.searchItem === ''){
      return this.users;
    }
    return this.users.filter((user:any) => {
      return user.name.toLowerCase().includes(searchElement);
    })
  }

  public removeItem(e: any){
    this.multiUsers.filter((item: any,index: any) => {
      if(e === index){
        console.log('ee');
        return this.multiUsers.splice(e,1);
      }
    })
  }

}
