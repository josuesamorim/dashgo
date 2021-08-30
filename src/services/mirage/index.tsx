import { createServer, Factory, Model } from 'miragejs';
import { name, internet, date } from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}


export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(){
                    return name.findName();
                },
                email(){
                    return internet.email();
                },
                createdAt(){
                    return date.recent();
                },
            })
        },

        seeds(server){
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;
            this.get('/users');
            this.post('/users');
            
            this.namespace = '';
            this.passthrough();
            
        }, 

       

       
    
    })

    return server;
}