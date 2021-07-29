import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
                <button>Кнопка</button>

            </Card>
        </div>
    );
};

export default App;