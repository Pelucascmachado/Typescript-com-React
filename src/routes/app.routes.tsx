import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../pages/Dashboard';
import { List } from '../pages/List';
import { Search } from '../pages/Search';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='dashboard'
                component={Dashboard}
            />

            <Screen
                name='list'
                component={List}
            />

            <Screen
                name='search'
                component={Search}
            />
        </Navigator>
    )
}