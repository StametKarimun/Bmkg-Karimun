<?php
/**
 * The main template file
 * 
 * File ini WAJIB ada di setiap tema WordPress
 * Akan digunakan jika tidak ada template yang lebih spesifik
 */

get_header();
?>

<div class="container" style="padding: 80px 5%; max-width: 1200px; margin: 0 auto;">
    <div class="section-header">
        <h1>Berita & Informasi</h1>
    </div>
    
    <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px;">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
        ?>
        <article class="post-card" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <?php if (has_post_thumbnail()) : ?>
            <div class="post-thumbnail">
                <?php the_post_thumbnail('medium'); ?>
            </div>
            <?php endif; ?>
            
            <div class="post-content" style="padding: 20px;">
                <h2 style="font-size: 1.3rem; margin-bottom: 10px;">
                    <a href="<?php the_permalink(); ?>" style="color: var(--navy); text-decoration: none;">
                        <?php the_title(); ?>
                    </a>
                </h2>
                <div class="post-meta" style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">
                    <?php echo get_the_date(); ?> | <?php the_category(', '); ?>
                </div>
                <div class="post-excerpt">
                    <?php the_excerpt(); ?>
                </div>
                <a href="<?php the_permalink(); ?>" class="read-more" style="color: var(--navy); font-weight: 500;">
                    Baca Selengkapnya →
                </a>
            </div>
        </article>
        <?php
            endwhile;
        else :
        ?>
        <p>Tidak ada konten yang ditemukan.</p>
        <?php
        endif;
        ?>
    </div>
    
    <!-- Pagination -->
    <div class="pagination" style="margin-top: 50px; text-align: center;">
        <?php
        the_posts_pagination(array(
            'mid_size' => 2,
            'prev_text' => '← Sebelumnya',
            'next_text' => 'Selanjutnya →'
        ));
        ?>
    </div>
</div>

<?php get_footer(); ?>