import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router'; // 👈 Expo Router
import { Ionicons } from '@expo/vector-icons'; // 👈 your icon library

// Types
type MenuItem = {
  label: string;
  offset: number;
  screen: string;
  icon: keyof typeof Ionicons.glyphMap; // 👈 makes sure icon names are valid
};

const SpeedDialButton = () => {
  const router = useRouter(); 
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = (): void => {
    const opening = !isOpen;
    setIsOpen(opening);

    Animated.timing(animation, {
      toValue: opening ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  // 👇 screen must match your file path in the app/ folder
  // e.g. app/learn.tsx = '/learn'
  // e.g. app/profile.tsx = '/profile'
  const menuItems: MenuItem[] = [
    { label: 'Home',    offset: -150, screen: '/',        icon: 'home'   },
    { label: 'Search',  offset: -75,  screen: '/learn',  icon: 'book' },
    { label: 'History', offset: 75,   screen: '/history', icon: 'time'   },
    { label: 'Profile', offset: 150,  screen: '/about', icon: 'information-circle-outline' },
  ];

  const handleNavigate = (screen: string): void => {
    setIsOpen(false);

    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    router.push(screen as any); // 👈 Expo Router uses push like this
  };

  const rotate = animation.interpolate({
    inputRange:  [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View style={styles.container}>

      {/* Menu items */}
      {menuItems.map((item: MenuItem) => {
        const translateX = animation.interpolate({
          inputRange:  [0, 1],
          outputRange: [0, item.offset],
        });

        return (
          <Animated.View
            key={item.label}
            style={[
              styles.menuItem,
              {
                opacity: animation,
                transform: [{ translateX }],
              },
            ]}
          >
            <Pressable
              onPress={() => handleNavigate(item.screen)}
              style={({ pressed }) => [
                styles.menuButton,
                pressed && styles.menuButtonPressed,
              ]}
            >
              <Ionicons name={item.icon} size={20} color="#3b82f6" />
            </Pressable>
            <Text style={styles.label}>{item.label}</Text>
          </Animated.View>
        );
      })}

      {/* Main button — styled just like your current one */}
      <Pressable
        onPress={toggleMenu}
        style={({ pressed }) => [
          styles.fab,
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
      >
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Ionicons name="add" size={28} color="#fff" />
        </Animated.View>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    zIndex: 50,
  },
  menuItem: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 40,
  },
  menuButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuButtonPressed: {
    backgroundColor: '#e5e7eb',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 4,
  },
});

export default SpeedDialButton;