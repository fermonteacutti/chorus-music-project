-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Allow anyone to view blog images
CREATE POLICY "Blog images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow authenticated users to upload blog images
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

-- Allow authenticated users to update blog images
CREATE POLICY "Authenticated users can update blog images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

-- Allow authenticated users to delete blog images
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);

-- Add cover_image column to posts
ALTER TABLE public.posts ADD COLUMN cover_image TEXT;