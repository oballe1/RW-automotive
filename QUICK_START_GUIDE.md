# RW Automotive Website - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: View the Website
The development server is already running!

**Open your browser and go to**: http://localhost:3000

### Step 2: Explore the Pages

Click through these pages to see all the features:

1. **Homepage** (http://localhost:3000)
   - Scroll through all sections
   - Click "Schedule Service" buttons
   - Test mobile view (resize browser)

2. **Services** (http://localhost:3000/services)
   - View all service categories
   - Click into "Repair Services" for the detailed brake page

3. **Tire Finder** (http://localhost:3000/tires)
   - Try searching: Year: 2020, Make: Honda, Model: Accord
   - See sample tire results

4. **Book Appointment** (http://localhost:3000/appointment)
   - Fill out the form
   - Submit to see confirmation message

5. **Contact Us** (http://localhost:3000/contact)
   - View the Google Maps integration
   - Test the contact form

### Step 3: Test Mobile Responsiveness

**In Chrome/Edge:**
1. Press `F12` to open DevTools
2. Click the mobile icon (or press `Ctrl+Shift+M` / `Cmd+Shift+M`)
3. Select different devices (iPhone, iPad, etc.)
4. Test the mobile menu (hamburger icon)

### Step 4: Make Your First Customization

Let's update the phone number as a test:

1. Open `rw-automotive-website/components/Header.tsx`
2. Find line with `(404) 429-0256`
3. Change to your desired number
4. Save the file
5. Browser will auto-refresh!

---

## 📝 Common Customizations

### Change Colors
**File**: `rw-automotive-website/tailwind.config.ts`

Replace `red-600` throughout the site with your brand color:
- Search for: `bg-red-600`
- Replace with: `bg-blue-600` (or any Tailwind color)

### Add Your Logo
1. Save logo as `logo.png` in `rw-automotive-website/public/`
2. Edit `components/Header.tsx`:
```tsx
<Image src="/logo.png" alt="RW Automotive" width={150} height={50} />
```

### Update Business Hours
**File**: `components/Header.tsx` and `components/Footer.tsx`

Find and update:
```tsx
Mon-Sat: 8:30 AM - 6:00 PM
```

### Add Real Testimonials
**File**: `app/page.tsx`

Find the `testimonials` array (around line 44) and update:
```typescript
const testimonials = [
  {
    name: 'Your Customer Name',
    rating: 5,
    text: 'Your testimonial text here...',
  },
  // Add more...
];
```

---

## 🛠 Development Commands

### Stop the Server
Press `Ctrl+C` in the terminal where it's running

### Start the Server Again
```bash
cd rw-automotive-website
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Check for Errors
```bash
npm run lint
```

---

## 📂 Where to Find Things

| What You Want to Change | File Location |
|------------------------|---------------|
| Homepage content | `app/page.tsx` |
| Services page | `app/services/page.tsx` |
| Navigation menu | `components/Header.tsx` |
| Footer links | `components/Footer.tsx` |
| Contact info | All components (search for phone/address) |
| SEO/Meta tags | `app/layout.tsx` |
| Colors/styling | Search for `red-600` across files |
| Business Schema | `components/SchemaMarkup.tsx` |

---

## 🎨 Quick Design Changes

### Change Primary Color (Red → Blue)
1. Open VS Code search (`Ctrl+Shift+F` or `Cmd+Shift+F`)
2. Search for: `red-600`
3. Replace all with: `blue-600`
4. Save all files

### Change Font
**File**: `app/layout.tsx`

Replace `Inter` with another Google Font:
```tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
});
```

### Adjust Spacing
All padding/margin uses Tailwind classes:
- `p-4` = padding 1rem
- `py-8` = padding top/bottom 2rem
- `px-6` = padding left/right 1.5rem

Change numbers (1-96) to adjust spacing.

---

## 🚨 Troubleshooting

### "Command not found: npm"
**Solution**: Install Node.js from https://nodejs.org

### Port 3000 already in use
**Solution**:
```bash
# Kill the process on port 3000
kill -9 $(lsof -ti:3000)
# Or use a different port
npm run dev -- -p 3001
```

### Changes not showing
**Solution**:
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check terminal for errors
3. Restart dev server

### TypeScript errors
**Solution**:
```bash
npm install
npm run dev
```

---

## 📱 Test Checklist

Before deploying, test these:

- [ ] Homepage loads and looks good
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Appointment form submits
- [ ] Tire finder searches
- [ ] Contact form works
- [ ] Phone links work on mobile
- [ ] Google Maps loads
- [ ] All buttons are clickable
- [ ] No console errors (F12 → Console tab)

---

## 🌐 Deploy to Vercel (Free Hosting)

1. **Create Vercel account**: https://vercel.com/signup
2. **Install Vercel CLI**:
```bash
npm install -g vercel
```

3. **Deploy**:
```bash
cd rw-automotive-website
vercel
```

4. **Follow prompts**:
   - Link to your account
   - Accept defaults
   - Get your live URL!

Your site will be live in ~2 minutes! 🎉

---

## 💡 Pro Tips

### Auto-save in VS Code
Enable auto-save to see changes instantly:
- File → Auto Save (or `Ctrl+Shift+P` → "Toggle Auto Save")

### Side-by-Side Editing
1. Open file in VS Code
2. Drag tab to right side to split screen
3. View code and browser together

### Quick Find & Replace
- Find: `Ctrl+F` (Windows) or `Cmd+F` (Mac)
- Replace: `Ctrl+H` (Windows) or `Cmd+H` (Mac)
- Replace in all files: `Ctrl+Shift+H` (Windows) or `Cmd+Shift+H` (Mac)

### Component Reuse
All components in `components/` folder can be reused:
```tsx
import Header from '@/components/Header';
```

---

## 📞 Need Help?

### Resources
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

### Common Questions

**Q: How do I add a new page?**
A: Create `app/page-name/page.tsx` - it auto-creates the route!

**Q: Where do images go?**
A: Put them in `public/` folder, then use `/image.jpg` in code.

**Q: How do I change the site title?**
A: Edit `app/layout.tsx` → `metadata.title`

**Q: Can I use this for multiple locations?**
A: Yes! Duplicate the site and update business info in each.

---

## ✅ Your Next 3 Steps

1. **Review the site** at http://localhost:3000
2. **Read** the PROJECT_SUMMARY.md for full details
3. **Customize** business info (phone, address, hours)

---

**You're all set!** 🎉

The website is ready to customize and deploy. Start by exploring it at http://localhost:3000, then make it your own!
