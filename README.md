# RBAC Admin Dashboard

A modern, full-stack admin dashboard built with Next.js 14+, featuring Role-Based Access Control (RBAC), authentication, and user management.

## 🚀 Features

- **Authentication**: NextAuth.js with credentials provider and JWT
- **Database**: Prisma ORM with SQLite (easily switchable to PostgreSQL/MySQL)
- **UI**: shadcn/ui components with Tailwind CSS
- **State Management**: TanStack Query for server state
- **RBAC System**: Complete role and permission management
- **Responsive Design**: Mobile-friendly sidebar navigation

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: Prisma + SQLite
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **State**: TanStack Query

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhaliAR21/Admin-Dashboard-with-RBAC.git
   cd Admin-Dashboard-with-RBAC
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set:
   - `NEXTAUTH_SECRET`: A secure random string
   - Database URL is already configured for SQLite

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Sign in at `/auth/signin`

## 📊 Database Schema

The application includes the following models:
- **User**: System users with authentication
- **Role**: User roles (Admin, Manager, User, etc.)
- **Permission**: Granular permissions
- **UserRole**: Many-to-many user-role relationships
- **RolePermission**: Many-to-many role-permission relationships
- **Project**: Projects that users can manage
- **Task**: Tasks within projects

## 🔐 Authentication

- Uses NextAuth.js with credentials provider
- Passwords are hashed with bcrypt
- JWT tokens for session management
- Protected routes with middleware

## 🎨 UI Components

Built with shadcn/ui:
- Responsive sidebar navigation
- Data tables for user management
- Forms with validation
- Dark/light theme support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── app-sidebar.tsx   # Main navigation
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── generated/            # Prisma generated client
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Other Platforms
- Railway
- Netlify
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
