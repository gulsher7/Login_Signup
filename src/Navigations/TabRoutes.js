import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="Home"
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes