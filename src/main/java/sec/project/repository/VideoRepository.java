package sec.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sec.project.domain.Videourl;

public interface VideoRepository extends JpaRepository<Videourl, Long> {

}
