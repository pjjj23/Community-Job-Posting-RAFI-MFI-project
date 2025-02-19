// ignore_for_file: must_be_immutable, use_build_context_synchronously

import 'package:flutter/material.dart';
import '../controller/register_api.dart'; // Import the API logic

class RegisterPage extends StatelessWidget {
  RegisterPage({super.key});

  // Input field controllers
  final TextEditingController firstNameController = TextEditingController();
  final TextEditingController middleNameController = TextEditingController();
  final TextEditingController lastNameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController contactNumberController = TextEditingController();
  String selectedRole = 'Recruiter'; // Default role

  final AuthService _authService = AuthService(); // AuthService instance

  Future<void> _signUp(BuildContext context) async {
    // Collect user input into a map
    final Map<String, dynamic> userData = {
      "FirstName": firstNameController.text,
      "MiddleName": middleNameController.text,
      "LastName": lastNameController.text,
      "Email": emailController.text,
      "Password": passwordController.text,
      "ContactNumber": contactNumberController.text,
      "Role": selectedRole,
    };

    // Call the registerUser method
    final String? errorMessage = await _authService.registerUser(userData);

    if (errorMessage == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Registration successful!')),
      );
      Navigator.pop(context); // Navigate back to login
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(errorMessage)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue[50],
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              const SizedBox(height: 40),
              _buildLogo(),
              const SizedBox(height: 20),
              _buildLandingImage('assets/images/LandingImage1.png'),
              const SizedBox(height: 20),
              _buildRegistrationCard(context),
              const SizedBox(height: 20),
              _buildLandingImage('assets/images/LandingImage2.png'),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLogo() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'Alay',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.grey[800],
          ),
        ),
        Text(
          'TRABAHO',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.blue[600],
          ),
        ),
      ],
    );
  }

  Widget _buildLandingImage(String assetPath) {
    return Image.asset(
      assetPath,
      height: 120,
    );
  }

  Widget _buildRegistrationCard(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            // ignore: deprecated_member_use
            color: Colors.grey.withOpacity(0.1),
            spreadRadius: 2,
            blurRadius: 5,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text(
            'Create Account',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Color(0xFF2D3748),
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 8),
          Text(
            'Join us and start your journey',
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey[600],
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          Row(
            children: [
              Expanded(
                child: _buildTextField(
                  hint: 'First Name',
                  controller: firstNameController,
                  prefixIcon: Icons.person_outline,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: _buildTextField(
                  hint: 'Middle Name',
                  controller: middleNameController,
                  prefixIcon: Icons.person_outline,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: _buildTextField(
                  hint: 'Last Name',
                  controller: lastNameController,
                  prefixIcon: Icons.person_outline,
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          _buildTextField(
            hint: 'Email',
            controller: emailController,
            prefixIcon: Icons.email_outlined,
          ),
          const SizedBox(height: 16),
          _buildTextField(
            hint: 'Password',
            controller: passwordController,
            prefixIcon: Icons.lock_outline,
            isPassword: true,
          ),
          const SizedBox(height: 16),
          _buildTextField(
            hint: 'Contact Number',
            controller: contactNumberController,
            prefixIcon: Icons.phone_outlined,
          ),
          const SizedBox(height: 16),
          _buildDropdownField(),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () => _signUp(context),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue[500],
              padding: const EdgeInsets.symmetric(vertical: 16),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
            ),
            child: const Text(
              'Sign Up',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: Colors.white,
              ),
            ),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Already have an account? ',
                style: TextStyle(
                  color: Colors.grey[600],
                ),
              ),
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text(
                  'Login',
                  style: TextStyle(
                    color: Colors.blue,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildTextField({
    required String hint,
    required TextEditingController controller,
    required IconData prefixIcon,
    bool isPassword = false,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[100],
        borderRadius: BorderRadius.circular(8),
      ),
      child: TextField(
        controller: controller,
        obscureText: isPassword,
        decoration: InputDecoration(
          hintText: hint,
          prefixIcon: Icon(
            prefixIcon,
            color: Colors.grey[500],
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide.none,
          ),
          filled: true,
          fillColor: Colors.grey[100],
          contentPadding: const EdgeInsets.symmetric(
            horizontal: 16,
            vertical: 12,
          ),
        ),
      ),
    );
  }

  Widget _buildDropdownField() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[100],
        borderRadius: BorderRadius.circular(8),
      ),
      child: DropdownButtonFormField<String>(
        decoration: InputDecoration(
          hintText: 'Select Role',
          prefixIcon: Icon(
            Icons.people_outline,
            color: Colors.grey[500],
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide.none,
          ),
          filled: true,
          fillColor: Colors.grey[100],
        ),
        value: selectedRole,
        onChanged: (value) {
          if (value != null) {
            selectedRole = value;
          }
        },
        items: const [
          DropdownMenuItem(value: 'Applicant', child: Text('Applicant')),
          DropdownMenuItem(value: 'Recruiter', child: Text('Recruiter')),
        ],
      ),
    );
  }
}
