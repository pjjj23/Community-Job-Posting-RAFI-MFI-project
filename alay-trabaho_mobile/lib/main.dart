import 'package:flutter/material.dart';
import '../pages/landing_page.dart';
import '../pages/login_page.dart';
import '../pages/user_page.dart';

void main() {
  runApp(MyApp());
}

// ignore: use_key_in_widget_constructors
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Navigation Demo',
      initialRoute: '/',
      routes: {
        '/': (context) => LandingPage(),
        '/login': (context) => LoginPage(),
        '/user': (context) => UserPage(),
      },
    );
  }
}
