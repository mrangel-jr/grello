import React, {Component} from  'react';

/*Data*/
import initialData from './initial-data';
import CardBoard from './components/CardBoard';
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <CardBoard initialData={initialData}/>
        );
    }
}
    

export default App;