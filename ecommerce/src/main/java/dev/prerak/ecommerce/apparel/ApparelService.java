package dev.prerak.ecommerce.apparel;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApparelService {
    @Autowired
    private ApparelRepository apparelRepository;

    public List<Apparel> allApparel(){
        return apparelRepository.findAll();
    }

    public Optional<Apparel> singleApparel(String name){
        return apparelRepository.findApparelByName(name);
    }

    public Apparel createApparel(String name, String description, double price, String imageUrl, String category){
        return apparelRepository.insert(new Apparel(name, description, price, imageUrl, category));
    }
}
