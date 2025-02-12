import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class RegisterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Register Page'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to Home Page
            Navigator.pushNamed(context, '/login');
            Navigator.pushNamed(context, '/register');
          },
          child: Text('Register'),
        ),
      ),
    );
  }
}
