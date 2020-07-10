import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CallHistory from '../screens/CallHistory';
import Profile from '../screens/Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../styles/colors';

export default class BottomTabNavigator extends React.Component{

    render(){
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Incoming Calls') {
                            iconName = focused
                                ? 'video'
                                : 'video-outline';
                        } else if (route.name === 'Call History') {
                            iconName = 'history';
                        }else if(route.name === 'Profile'){
                            iconName = focused ? 'account-card-details' : 'account-card-details-outline'
                        }
            
                        // You can return any component that you like here!
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                    })}
                    tabBarOptions={{
                        activeTintColor: colors.white,
                        inactiveTintColor: 'gray',
                        activeBackgroundColor:colors.background,
                        inactiveBackgroundColor:colors.background
                    }}
            >
                <Tab.Screen name="Incoming Calls" component={CallHistory} />
                <Tab.Screen name="Call History"   component={CallHistory} />
                <Tab.Screen name="Profile"       component={Profile}     />
            </Tab.Navigator>
        );
    }
};