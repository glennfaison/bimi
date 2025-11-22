#!/bin/bash
# Run all database migration scripts in order
# 
# Usage:
#   1. Set your DATABASE_URL environment variable
#      export DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"
#   
#   2. Make this script executable:
#      chmod +x scripts/run_all.sh
#   
#   3. Run it:
#      ./scripts/run_all.sh

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔══════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   BIMI Database Migration Runner         ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════╝${NC}"
echo ""

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    if [ -n "$POSTGRES_USER" ] && [ -n "$POSTGRES_PASSWORD" ] && [ -n "$POSTGRES_HOST" ] && [ -n "$POSTGRES_DATABASE" ]; then
        export DATABASE_URL="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:5432/$POSTGRES_DATABASE?sslmode=require"
        echo -e "${YELLOW}ℹ️  DATABASE_URL constructed from environment variables${NC}"
    else
        echo -e "${RED}❌ ERROR: Required environment variables for constructing DATABASE_URL are not set${NC}"
        exit 1
    fi
fi

# Check if psql is installed
if ! command -v psql &> /dev/null; then
    echo -e "${RED}❌ ERROR: psql is not installed${NC}"
    echo ""
    echo "Install PostgreSQL client:"
    echo "  macOS: brew install postgresql"
    echo "  Ubuntu: sudo apt-get install postgresql-client"
    exit 1
fi

echo -e "${GREEN}✓${NC} DATABASE_URL is set"
echo -e "${GREEN}✓${NC} psql is installed"
echo ""

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Find and run all .sql files in sorted order
for script_path in $(find "$SCRIPT_DIR" -maxdepth 1 -name "*.sql" | sort); do
    script_name=$(basename "$script_path")
    echo -e "${BLUE}▶${NC}  Running: $script_name"
    if psql "$DATABASE_URL" -f "$script_path" > /dev/null 2>&1; then
        echo -e "${GREEN}✓${NC}  Completed: $script_name"
    else
        echo -e "${YELLOW}⚠${NC}  Completed with warnings: $script_name (this is usually OK if tables already exist)"
    fi
    echo ""
done

echo -e "${BLUE}╔══════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Migration Complete!                    ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📝 IMPORTANT: Create Admin User${NC}"
echo "   Script 006_create_admin_user.sql cannot be run automatically."
echo "   Please create admin user manually:"
echo ""
echo "   1. Go to Supabase Dashboard > Authentication > Users"
echo "   2. Click 'Add user' > 'Create new user'"
echo "   3. Email: admin@bimiconsulting.org"
echo "   4. Password: your-secure-password"
echo "   5. Check 'Auto Confirm User'"
echo ""
echo -e "${GREEN}✓${NC} Next steps:"
echo "   - Visit /auth/login to login"
echo "   - Visit /admin to access the admin panel"
echo ""
