<?php
    $json_data = file_get_contents('dados.json');
    $informacao = json_decode($json_data, true);

    $nome = $informacao["nome"];
    $areadetrabalho = $informacao["areadetrabalho"];
    $frasecima = $informacao["frasecima"];
    $frasebaixo = $informacao["frasebaixo"];
    $aboutme = $informacao["aboutme"];
    $objetivos = $informacao["objectives"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Curriculum - <?php echo $nome; ?></title>
</head>
<body>
	<div class="main_base_cv">
		<div class="background_layer_cv">
			<div class="header">
			
				<div class="left_text_header">
					<span>Curriculum</span>
				</div>
				<div class="right_text_header">
					<a href="index.html"><span>Home</span></a>
				</div>
				<div class="right_text_header">
					<a href="portfolio.html"><span>Portifólio</span></a>
				</div>
			</div>
			<div class="introduction_cv">
				<div class="introduction_text_cv">
					<div class="primary_text">
						<span><?php echo $nome ?></span>
					</div>
					<div class="introduction_text_description_cv">
						<span><?php echo $areadetrabalho ?></span>
					</div>
					<div class="introduction_text_frase_cv">
						<div class="introduction_text_frase_above_cv">
							<span>"<?php echo $frasecima ?></span>
						</div>
						<div class="introduction_text_frase_below_cv">
							<span><?php echo $frasebaixo ?>"</span>
						</div>
					</div>
				</div>
				<div class="introduction_image_cv">
					<img src="https://yt3.googleusercontent.com/ytc/AIdro_kgv0-QltZngLUgLcOCdaty42AwdxuO49dHmMcIoy2ctPg=s900-c-k-c0x00ffffff-no-rj" alt="">
				</div>
			</div>
			<div class="info_cv">
				<div class="info_buttons_section_cv">
					<div class="info_buttons_cv" data-type="aboutme">
						<span>Sobre mim</span>
						<div class="info_buttons_body_cv">
							<span><?php echo $aboutme ?></span>
						</div>
					</div>
					<div class="info_buttons_cv" data-type="objectives">
						<span>Objetivos</span>
						<div class="info_buttons_body_cv">
							<span><?php echo $objetivos ?></span>
						</div>
					</div>
					<div class="info_buttons_cv" data-type="jobs">
						<span>Experiência</span>
						<div class="info_buttons_body_cv">
                            <?php foreach($informacao["jobs"] as $job){
                            echo '<span class="info_buttons_body_title_cv">' . $job["cargo"] . ' - ' . $job["empresa"] . ' (' . $job["periodo"] . ')' . '</span>';
                            echo '<span class="info_buttons_body_description_cv">' . $job["descricao"] . '</span>';
                            };
                            ?>	
						</div>
					</div>
					<div class="info_buttons_cv" data-type="education">
						<span>Formação acadêmica</span>
						<div class="info_buttons_body_cv">
                            <?php foreach($informacao["education"] as $edu){
                            echo '<span class="info_buttons_body_title_cv">' . $edu["curso"] . ' - ' . $edu["instituicao"] . ' (' . $edu["periodo"] . ')' . '</span>';
                            echo '<span class="info_buttons_body_description_cv">' . $edu["descricao"] . '</span>';
                            }
                            ?>
						</div>
					</div>
					<div class="info_buttons_cv" data-type="certifications">
						<span>Certificados</span>
						<div class="info_buttons_body_cv">
							<span class="info_buttons_body_title_cv">Nome do certificado - instituição (Periodo)</span>
							<span class="info_buttons_body_description_cv">Descrição</span>
						</div>
					</div>
					<div class="info_buttons_cv" data-type="contact">
						<span>Contato</span>
						<div class="info_buttons_body_cv">
							<span class="info_buttons_body_title_cv">Nome da rede social:</span>
							<span class="info_buttons_body_description_cv">Link</span>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<div class="footer_contact">
					<ul>
						<li><a href="www.linkedin.com/in/gustavopereiracagega" target="_blank"><img src="/Conteudo/Imagens/index/Linkeding-logo.svg" alt=""></a></li>
						<li><a href="https://github.com/gpc186" target="_blank"><img src="/Conteudo/Imagens/index/Github-logo.svg" alt=""></a></li>
					</ul>
				</div>
			</footer>
		</div>
	</div>
</body>
<script src="main.js"></script>
</html>