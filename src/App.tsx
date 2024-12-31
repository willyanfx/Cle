// import styles from './App.module.scss';
import { AppStateProvider } from './appState';

import { Layout } from './components/Layout';

const App: React.FC = () => {
    return (
        <div>
            <AppStateProvider>
                <Layout />
            </AppStateProvider>
        </div>
    );
};

export default App;
