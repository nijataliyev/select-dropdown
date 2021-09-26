import { Options, Vue } from "vue-class-component";
import axios from 'axios';

@Options({
    name: 'my-select-component'
})

export default class MySelectComponent extends Vue {

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
}
