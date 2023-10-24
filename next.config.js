/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'scontent.fpnq2-1.fna.fbcdn.net',
      'm.facebook.com',
      'https://m.facebook.com/photo/view_full_size/?fbid=3599384557049543&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg,https://m.facebook.com/photo/view_full_size/?fbid=3599384613716204&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg,https://m.facebook.com/photo/view_full_size/?fbid=3599384567049542&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg' 
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  }
}

module.exports = nextConfig
